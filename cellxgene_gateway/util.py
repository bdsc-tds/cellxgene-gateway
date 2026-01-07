# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


# Import utility modules
import typing as t
from datetime import datetime
from werkzeug.serving import _ansi_style, _log, WSGIRequestHandler
from werkzeug.urls import uri_to_iri


def current_time_stamp():
    """
    Return current time as Unix timestamp.

    Returns:
    --------
    timestamp: float
        Number of seconds since Unix epoch (January 1, 1970).
    """
    now = datetime.now()
    timestamp = datetime.timestamp(now)
    return timestamp


class CustomRequestHandler(WSGIRequestHandler):
    """
    Custom request handlers slightly modified from default Werkzeug class.
    """

    def log(self, type: str, message: str, *args: t.Any) -> None:
        """
        Log message with client's address.

        Parameters:
        -----------
        type: str
            Log level type (e.g., 'info', 'error').
        message: str
            Message format string to log.
        *args: t.Any
            Arguments to format into message.

        Returns:
        --------
        None
        """
        # IPv6 addresses contains "%" which breaks logging
        address_string = self.address_string().replace("%", "%%")
        _log(
            type,
            f"{address_string}  {message}\n",
            *args,
        )

    def log_request(self, code: int | str = "-", size: int | str = " ") -> None:
        """
        Log HTTP request with colored output based on status code.

        Parameters:
        -----------
        code: int | str
            HTTP status code. Default is "-".
        size: int | str
            Response size in bytes. Default is " ".

        Returns:
        --------
        None
        """
        try:
            path = uri_to_iri(self.path)
            msg = f"{self.command} {path} {self.request_version}"
        except AttributeError:
            # Path isn't set if requestline was bad
            msg = self.requestline

        # Escape control characters that may be in decoded path
        msg = msg.translate(self._control_char_table)
        code = str(code)

        if code[0] == "1":  # 1xx Informational
            msg = _ansi_style(msg, "bold")
        elif code == "200":  # 2xx Success
            pass
        elif code == "304":  # 304 Resource Not Modified
            msg = _ansi_style(msg, "cyan")
        elif code[0] == "3":  # 3xx Redirection
            msg = _ansi_style(msg, "green")
        elif code == "404":  # 404 Resource Not Found
            msg = _ansi_style(msg, "yellow")
        elif code[0] == "4":  # 4xx Client Error
            msg = _ansi_style(msg, "bold", "red")
        else:  # 5xx or any other response
            msg = _ansi_style(msg, "bold", "magenta")

        self.log("info", '"%s" %s %s', msg, code, size)

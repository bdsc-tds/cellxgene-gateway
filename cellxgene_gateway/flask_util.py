# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


# Import utility modules
from flask import request, url_for


# Flag to determine whether to include source name in generated URLs
include_source_in_url = False


def querystring():
    """
    Get current request query string, prefixed with question mark if not empty.

    Returns:
    --------
    str
      Decoded query string with "?" prefix, or an empty string if none.
    """
    qs = request.query_string.decode()
    return f'?{qs}' if len(qs) > 0 else ''


def url(endpoint, descriptor, source_name):
    """
    Generate URL for given endpoint and dataset path. If `include_source_in_url`
    is True, URL includes source name, otherwise, only includes descriptor.

    Parameters:
    -----------
    endpoint: str
      Flask endpoint to route to.

    descriptor: str
      Path or identifier for dataset.

    source_name: str
      Name of data source.

    Returns:
    --------
    str
      URL string for given endpoint and path.
    """
    if include_source_in_url:
        return url_for(endpoint, source_name=source_name, path=descriptor)
    else:
        return url_for(endpoint, path=descriptor)


def view_url(descriptor, source_name):
    """
    Generate URL to view dataset

    Parameters:
    -----------
    descriptor: str
      Path or identifier for dataset.

    source_name: str
      Name of data source.

    Returns:
    --------
    str
      URL string pointing to dataset view endpoint.
    """
    return url('do_view', descriptor, source_name)


def relaunch_url(descriptor, source_name):
    """
    Generate URL to relaunch dataset.

    Parameters:
    -----------
    descriptor: str
      Path or identifier for dataset.

    source_name: str
      Name of data source.

    Returns:
    --------
    str
      URL string pointing to dataset relaunch endpoint.
    """
    return url('do_relaunch', descriptor, source_name)

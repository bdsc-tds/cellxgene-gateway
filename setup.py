import codecs
import os

from setuptools import find_packages, setup


def read(rel_path):
    here = os.path.abspath(os.path.dirname(__file__))
    with codecs.open(os.path.join(here, rel_path), 'r') as fp:
        return fp.read()


def get_version(rel_path):
    for line in read(rel_path).splitlines():
        if line.startswith('__version__'):
            delim = '"' if '"' in line else "'"
            return line.split(delim)[1]
    raise RuntimeError('Unable to find version string.')


def parse_requirements():
    reqs = []
    with open('requirements.txt', 'r') as f:
        for line in f:
            reqs.append(line.strip('\n'))
    return reqs


with open('README.md', 'r') as fh:
    long_description = fh.read()

install_reqs = parse_requirements()

setup(
    # mandatory
    name='cellxgene_gateway',
    # mandatory
    version=get_version('cellxgene_gateway/__init__.py'),
    # mandatory
    author='Niket Patel, Yohann Potier, Alok Saldanha',
    author_email='alok.saldanha@novartis.com',
    description=('Cellxgene Gateway'),
    long_description=long_description,
    long_description_content_type='text/markdown',
    license='MIT',
    keywords='visualization, genomics',
    url='http://github.com/Novartis/cellxgene-gateway',
    packages=find_packages(),
    package_data={
        'cellxgene_gateway': [
            'static/css/*.css',
            'templates/*.html',
            'static/js/*.js',
            'static/favicon.png',
            'static/ssf_logo.png',
            'static/cell.jpg',
        ]
    },
    data_files=[('', ['README.md', 'LICENSE'])],
    install_requires=install_reqs,
    entry_points={
        'console_scripts': ['cellxgene-gateway=cellxgene_gateway.gateway:main']
    },
    classifiers=['Topic :: Scientific/Engineering :: Visualization'],
    python_requires='>=3.6',
)

# shuff.io

[shuff.io](https://shuff.io) is a website that aggregates information about the global shuffleboard community into one place!

## Tech Stack

This project is currently uses the static site generator paradigm. It uses [Jekyll](https://github.com/jekyll/jekyll) as the generator, [Bootstrap](https://github.com/twbs/bootstrap) for CSS, and [DataTables](https://github.com/DataTables/DataTables) for the Tournament list. The main branch of this repository is automatically deployed to [https://shuff.io](https://shuff.io), which is hosted on [Netlify](https://www.netlify.com/).

To run locally, you'll need to install Ruby, ideally the version specified in [.ruby-version](.ruby-version). Then, install dependencies by running `bundle install`. Finally, running `bundle exec jekyll serve` will generate the site and start a local web server at [http://localhost:4000](http://localhost:4000).

## Adding Events to the Web Site

### As a Developer

Fork this respository, and add CSV files to the [_data/tournaments](_data/tournaments/) folder in this project. Note that column names must match the existing files exactly. YAML and JSON files with the same keys should also work, but this has not been tested. Once you've tested your changes, open a Pull Request back into this project.

### Everyone Else

Email [contact@recrec.io](mailto:contact@recrec.io?subject=Add%20a%20Tournament%20to%20shuff.io) with the tournament details, and we'll get it added.

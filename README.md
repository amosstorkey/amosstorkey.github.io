#AmosWebsite

## Modifying web page

Most text is in html so you can just edit the contents of the HTML pages inside `_includes/`.`

Higher level stuff can be modified by changing `_config.yml` e.g. you can turn off twitter etc.

## Generate static webpage

Install Jekyll https://jekyllrb.com/docs/installation/

Then:

- Clone locally
- Edit baseurl to /amos (if this is going on your homepages)

Run
```
bundle exec jekyll build clean
```
This will create a _site folder with the whole static web page inside it. So just copy the folders of that to your `amos` directory on homepages.

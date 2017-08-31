## Download CLI
Now you need to install the plugin CLI package, to set it globally remember `-g` at the end of the line: 

```shell
npm install @IT/gl-grunt-project-cli -g
```

If any error related to NPM registry shows up, type this into the cmd:

```shell
npm set registry https://npm.loccioni.com
```

## Usage
Now you can start using the cli to create templates!

In order to do so you can type the following:

``` shell
gl-cli [options] [template-name]
```

## Options
Options availables are:

>>>

* `web`:  _create a default template for web based applications._

* `desktop`:  _create a default template for desktop based applications._

* `h|help`:  _show a quick guide._

* `v|verbose`:  _runs the cli in verbose mode._
>>>

## Others
If you decide to write only the template name, the cli will use `web` as default template.

`verbose` must be written as first argument:

``` shell
gl-cli v web test
```

It will run the cli in verbose mode.

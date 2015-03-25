## PG Components Starter Kit

PG Components Starter Kit is a simple partials library to speed up your workflow with the Prototype-Generator (PG).

### Requirements

In general there are no requirements. Just download the package and import the files you need. 

If you want to install it with Bower, here are the requirements: 

- NodeJS
- Bower (npm install -g bower)

### Installation

``` bash
bower install pg-components --save
```

### How to use

Just copy the files you need into your project. 

### Main Files

#### `components`

Here you can find general components. just copy and paste the files you need into your project (`resources/templates/partials/components`). 

Each component has a data (JSON) and style (SCSS) file in the same folder. 

#### `panels`

In the `panels` folder you can find panel templates (also called factory or mini template). 
These templates can be used to wrap components and modules and structure your code base. 

Just copy and paste a `panel` into `resources/templates/partials/panels` and be sure you have added this folder to your assemble task. 

To see how it works, take a look at `resources/templates/pages/page-section.hbs`.

#### `markdown`

I created some markdown files to speed up the integration of dummy content. 

Just choose the files you need from the `markdown` folder.

<div align="center">
  <h1>Month Year Datepicker</h1>
  <h4>Creates a new field widget to make Date fields work just with Month and Years</h4>
  <br>
  <p>
    <a href="https://github.com/JDavidMoreno/month_year_widget/blob/main/LICENSE">
        <img alt="license" src="https://img.shields.io/badge/license-MIT-green" />
    </a>
    <img alt="python version" src="https://img.shields.io/badge/python-3.5 | 3.6 | 3.7 | 3.8 | 3.9 -blue" />
    <a href="https://github.com/odoo/odoo/tree/12.0">
        <img alt="latest release" src="https://img.shields.io/badge/Odoo%20Version-12-success" />
    </a>
  </p>
</div>

<div align="center">
  <table>
    <tr>
      <td><img alt="example field just months-years" src="https://github.com/JDavidMoreno/month_year_widget/main/.github/images/widget_example.png" /></td>
    </tr>
  </table>
</div>

---

## Table of Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Motivation

Sometimes you don't really need to enter a specific day for a date in Odoo, probably you just need to know the month and the year. For cases like this, with this new widget you don't have to care about entering a random number for the day.

## Installation

Move this module to your addons folder. Then restart your Odoo server and, while in developer mode, click the button Update Apps List from the Apps addons.

## Usage

Once the module is installed. Add it to the `__manifest__.py` of the module where you want to use it. Then, in the xml add the `widget='month_year_format'`.

![xml widget example](https://github.com/JDavidMoreno/month_year_widget/main/.github/images/code_example.png)

## License

This project is licensed under the terms of the
[MIT](https://choosealicense.com/licenses/mit/) license.

<div align="right">
  <b><a href="#month-year-datepicker">↥ back to top</a></b>
</div>

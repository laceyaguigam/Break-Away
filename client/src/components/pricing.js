import React from "react";

//modal variable for sign-up form

//BTN NEEDS COMMAND TO SUBMIT FORM

function Pricing() {
  return (
    <div>
      <div class="modal-header">
        <h4 class="modal-title">Select a Service</h4>
      </div>

      <div class="modal-body">
        <div class="columns">
          <ul class="price">
            <li class="header">Basic Goodbye</li>
            <li class="grey">$5.99</li>
            <li>Hire an Away social media message.</li>
            <li>
              Select style from: polite, enraged, respectful, sorrowful,
              dramatic
            </li>
            <li>Select platform from: Facebook, Twitter, or </li>
            <li>No customization elements.</li>
            <li class="grey">
              <a href="#" class="button" id="option1">
                Select
              </a>
            </li>
          </ul>
        </div>

        <div class="columns">
          <ul class="price">
            <li class="header">Sincere Farewell</li>
            <li class="grey">$29.99</li>
            <li>Ship a package</li>
            <li>
              Select style from: polite, enraged, respectful, sorrowful,
              dramatic
            </li>
            <li>
              Contents may include some or all of: flowers, chocolates,
              hand-written dear jane/john letter, doggy doodoo, a mixed tape of
              sad songs, and/or a glitter bomb
            </li>
            <li>Customization options available.</li>
            <li class="grey">
              <a href="#" class="button" id="option2">
                Select
              </a>
            </li>
          </ul>
        </div>

        <div class="columns">
          <ul class="price">
            <li class="header">Epic Sendoff</li>
            <li class="grey">up to $1,000</li>
            <li>In-Person Delivery and/or Performance</li>
            <li>
              Select style from: polite, enraged, respectful, sorrowful,
              dramatic
            </li>
            <li>
              Dazzle and un-delight! Your breakup can be delivered by a mariachi
              band, an acapalla group, an actor pretending to be your new beau,
              and more.
            </li>
            <li>
              Customization subject to limitations according to federal and
              state law.
            </li>
            <li class="grey">
              <a href="#" class="button" id="option3">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];

const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];

const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarListElement = userDialog.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;

const similarWizard = similarWizardTemplate.querySelector(`.setup-similar-item`);

const wizards = [
  {
    name: `${WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
  }
];

const renderWizard = (wizard) => {
  const wizardElement = similarWizard.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);


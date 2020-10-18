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

const getRandomData = (data) => {
  const datum = data[Math.floor(Math.random() * data.length)];

  return datum;
};

const createWizards = (name, surname, coatColor, eyesColor) => {
  let wizards = [];
  for (let i = 0; i < 4; i++) {

    wizards[i] = {
      name: `${getRandomData(name)} ${getRandomData(surname)}`,
      coatColor: getRandomData(coatColor),
      eyesColor: getRandomData(eyesColor)
    };
  }
  return wizards;
};

const renderWizard = (wizard) => {
  const wizardElement = similarWizard.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < createWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS).length; i++) {
  fragment.appendChild(renderWizard(createWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS)[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);


'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 20;
const FONT_GAP = 5;
const TEXT_HIGHT = 16;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';

  let maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(
    'Ура вы победили!',
    CLOUD_X + GAP,
    CLOUD_Y + GAP
  );

  ctx.fillText(
    'Список результатов:',
    CLOUD_X + GAP,
    CLOUD_Y + GAP + TEXT_HIGHT + FONT_GAP
  );

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT - FONT_GAP - BAR_HEIGHT - FONT_GAP - TEXT_HIGHT
    );
    ctx.fillRect(
      CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT - FONT_GAP - BAR_HEIGHT,
      BAR_WIDTH,
      (BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.fillText(
      names[i],
      CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT
    );
  }
/*
  ctx.fillStyle = 'hsl(240, 100%, 50%)';
  ctx.fillText(
    'Time',
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 1,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT - FONT_GAP - BAR_HEIGHT - FONT_GAP - TEXT_HIGHT
  );
  ctx.fillRect(
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 1,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT - FONT_GAP - BAR_HEIGHT,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillText(
    'Кекс',
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 1,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT
  );

  ctx.fillStyle = 'hsl(240, 100%, 60%)';
  ctx.fillText(
    'Time',
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 2,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT - FONT_GAP - BAR_HEIGHT - FONT_GAP - TEXT_HIGHT
  );
  ctx.fillRect(
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 2,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT - FONT_GAP - BAR_HEIGHT,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillText(
    'Катя',
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 2,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT
  );

  ctx.fillStyle = 'hsl(240, 100%, 70%)';
  ctx.fillText(
    'Time',
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 3,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT - FONT_GAP - BAR_HEIGHT - FONT_GAP - TEXT_HIGHT
  );
  ctx.fillRect(
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 3,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT - FONT_GAP - BAR_HEIGHT,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillText(
    'Игорь',
    CLOUD_X + GAP * 2 + (BAR_WIDTH + GAP) * 3,
    CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HIGHT
  );*/
};

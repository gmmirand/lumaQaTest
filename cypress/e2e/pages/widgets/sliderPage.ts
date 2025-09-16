export class SliderPage {
  sliderInput() {
    return cy.get('input.range-slider');
  }

  sliderBall() {
    return cy.get('.range-slider__tooltip');
  }

  sliderValueInput() {
    return cy.get('#sliderValue');
  }

  visit() {
    cy.visit('/');
    cy.contains('.card-body h5', 'Widgets').click();
    cy.contains('.element-list .menu-list li', 'Slider').click();
  }

  setSliderValue(value: number) {
    this.sliderInput().then($slider => {
      const slider = $slider[0] as HTMLInputElement;
      const min = parseInt(slider.min) || 0;
      const max = parseInt(slider.max) || 100;

      const percent = (value - min) / (max - min);
      const rect = slider.getBoundingClientRect();
      const targetX = rect.left + (rect.width * percent);

      cy.wrap(slider)
        .realClick({ position: 'center' })
        .realMouseDown({ position: 'center' })
        .realMouseMove(targetX - rect.left, 0, { position: 'left' })
        .realMouseUp();
    });
  }

  verifySliderValue(expected: number) {
    this.sliderValueInput().should('have.value', expected.toString());
  }
}

import React from 'react';

import Button from '../Button';

import { Container } from './ToggleButton.style';
import { IToggleButtonProps } from './ToggleButton.d';

/**
 * ToggleButton component
 * @description ToggleButton component with two options (left and right) and two states (selected and unselected)
 * @param {string} size - size of the button
 * @param {string} value - value of the selected button
 * @param {string} leftValue - value of the left button
 * @param {string} rightValue - value of the right button
 * @param {string} leftLabel - label of the left button
 * @param {string} rightLabel - label of the right button
 * @param {string} color - color of the selected button
 * @param {function} onChange - callback function that is called when the button is clicked
 * @returns {React.FunctionComponentElement<React.ReactNode>} ToggleButton component
 */
function ToggleButton({
  size = 'xs',
  value,
  leftValue = 'false',
  rightValue = 'true',
  leftLabel = 'false',
  rightLabel = 'true',
  color = 'primary',
  onChange,
}: IToggleButtonProps): React.FunctionComponentElement<React.ReactNode> {
  const [selected, setSelected] = React.useState(value);

  const handleToggle = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = e.currentTarget.dataset;
      if (value) {
        setSelected(value);
        if (onChange) {
          onChange(value);
        }
      }
    },
    [onChange],
  );

  return (
    <Container>
      <Button
        variant={selected === leftValue ? 'contained' : 'text'}
        css={{ borderRadius: '3px 0 0 3px' }}
        data-value={leftValue}
        onClick={handleToggle}
        size={size}
        color={color}
      >
        {leftLabel}
      </Button>
      <Button
        variant={selected === rightValue ? 'contained' : 'text'}
        css={{ borderRadius: '0 3px 3px 0' }}
        data-value={rightValue}
        onClick={handleToggle}
        size={size}
        color={color}
      >
        {rightLabel}
      </Button>
    </Container>
  );
}

ToggleButton.displayName = 'ToggleButton';
export default React.memo(ToggleButton);

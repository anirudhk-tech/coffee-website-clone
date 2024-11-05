import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModeChangeButton } from '@/app/components/common/modeChangeButton';
import ThemeProviderWrapper from '@/app/components/common/themeProviderWrapper';

describe('ModeChangeButton', () => {
    it('should render the button with light mode icon initially', () => {
        render(
            <ThemeProviderWrapper>
                <ModeChangeButton/>
            </ThemeProviderWrapper>
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByTestId('light-mode-icon')).toBeInTheDocument();
    });

    it('should change color on hover', () => {
        render(
            <ThemeProviderWrapper>
                <ModeChangeButton/>
            </ThemeProviderWrapper>
        );
        const button = screen.getByRole('button');
        const initialColor = getComputedStyle(button).color;

        fireEvent.mouseEnter(button); // Testing color change on mouse enter (hover)
        expect(getComputedStyle(button).color).not.toBe(initialColor);

        fireEvent.mouseLeave(button); // Testing color change on mouse leave (no hover)
        expect(getComputedStyle(button).color).toBe(initialColor); 
    });

    it('should toggle theme on click', () => {
        render(
            <ThemeProviderWrapper>
                <ModeChangeButton/>
            </ThemeProviderWrapper>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(screen.getByTestId('dark-mode-icon')).toBeInTheDocument();
    });
});
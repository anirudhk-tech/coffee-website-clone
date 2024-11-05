import '@testing-library/jest-dom';
import { NavbarCategory } from '@/app/components/common/navbarCategory';
import { fireEvent, render, screen } from '@testing-library/react';

describe('NavbarCategory', () => {
    it('should render the category text', () => {
        render (
            <NavbarCategory title="Test Category" route="/test"/>,
        );

        expect(screen.getByText('Test Category')).toBeInTheDocument(); // Testing if category appears on navbar
    });

    it('should change color on hover', () => {
        render(
            <NavbarCategory title="Test Category" route="/test"/>,
        );

        const text = screen.getByText('Test Category');
        const initialColor = getComputedStyle(text).color;
        
        fireEvent.mouseEnter(text); // Testing color change on mouse enter (hover)
        expect(getComputedStyle(text).color).not.toBe(initialColor);

        fireEvent.mouseLeave(text); // Testing color change on mouse leave (no hover)
        expect(getComputedStyle(text).color).toBe(initialColor);
    });
});
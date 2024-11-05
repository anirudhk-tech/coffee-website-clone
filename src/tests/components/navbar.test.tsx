import '@testing-library/jest-dom';
import { Navbar } from '@/app/components/common/navbar';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Navbar', () => {
    it('should render the navbar', () => {
        render (
            <Navbar/>
        );

        expect(screen.getByTestId('navbar')).toBeInTheDocument(); // Testing if navbar renders
    });

    it('should have home as the current category', () => {
        render (
            <Navbar/>
        );

        const homeCategoryText = screen.getByText('Home');
        const unselectedCategoryText = screen.getByText('Projects'); // Random section to get color of unselected
        const unselectedBgColor = getComputedStyle(unselectedCategoryText).backgroundColor;
        expect(getComputedStyle(homeCategoryText).backgroundColor).not.toBe(unselectedBgColor); // Testing if home is the current category and its background color is different
    });

    it('should not change color on hover if selected', () => {
        render(
            <Navbar/>
        );

        const homeCategoryText = screen.getByText('Home');
        const initialColor = getComputedStyle(homeCategoryText).color;
    
        fireEvent.mouseEnter(homeCategoryText); // Testing color not changing on mouse enter (hover) while selected
        expect(getComputedStyle(homeCategoryText).color).toBe(initialColor);
    });

    it('should change color on hover if unselected', () => {
        render(
            <Navbar/>
        );
        const projectsCategoryText = screen.getByText('Projects'); // Random category to test color change
        const initialColor = getComputedStyle(projectsCategoryText).color;
        
        fireEvent.mouseEnter(projectsCategoryText); // Testing color change on mouse enter (hover) while unselected
        expect(getComputedStyle(projectsCategoryText).color).not.toBe(initialColor);

        fireEvent.mouseLeave(projectsCategoryText);
        expect(getComputedStyle(projectsCategoryText).color).toBe(initialColor);
    });

    it('should change categories on click', () => {
        render(
            <Navbar/>
        );

        const projectsCategoryText = screen.getByText('Projects'); // Random category to test category change
        const homeCategoryText = screen.getByText('Home');
        const selectedBgColor = getComputedStyle(homeCategoryText).backgroundColor;

        fireEvent.click(projectsCategoryText); // Testing category change on click
        expect(getComputedStyle(projectsCategoryText).backgroundColor).toBe(selectedBgColor); // Projects should be selected color after click
        expect(getComputedStyle(homeCategoryText).color).not.toBe(selectedBgColor); // Home should not be selected color after click
    });
});
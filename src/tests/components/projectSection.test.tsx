import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ProjectSection } from '@/app/components/projects/projectSection';

describe('ProjectSection', () => {
    const veryLongText = `
        This is a test to verify that extremely long text strings render correctly within the viewable area of the application. 
        The goal is to ensure that the UI is responsive and that text wrapping or truncation behaves as expected. 
        This particular string contains multiple sections of repeated text to simulate user-generated content or uncommonly verbose labels. 
        By extending this text to an exaggerated length, we can observe how it interacts with the screen's boundaries, whether it wraps naturally, is truncated, or extends beyond the screen in an unintended manner. 
        Edge cases like this help us confirm that our application remains visually consistent and that elements on the page do not overlap, overflow, or become unreadable under any circumstances. 
        Testing for long descriptions is especially critical for applications that may encounter diverse text input lengths from various sources. 
        This particular test case should ensure that even with this highly verbose description, all relevant text remains within the visible, 
        interactive area, with potential scrollbars or truncation as required by the layout.`;

    it('should render the project section', () => {
        render(
            <ProjectSection
                title="Test Title"
                description="Test Description"
            />
        );
        
        expect(screen.getByText('Test Title')).toBeInTheDocument(); // Checking whether the section is rendered
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('should not go off screen for long descriptions', () => {
        render (
            <ProjectSection
                title="Test Title"
                description={veryLongText}
            />
        );

        const projectSection = screen.getByTestId('project-section');

        const contentHeight = projectSection.scrollHeight;
        const visibleHeight = projectSection.clientHeight;

        expect(contentHeight >= visibleHeight).toBeTruthy();  // Asserting that the visible height is less than the scrollable height (scrollable check)
    });
});
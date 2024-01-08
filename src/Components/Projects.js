import React from 'react';
import Project from './Project';


const projectsList = [
    {
        id: 1,
        title: 'Super Galactic Age Calculator',
        description: 'Web application that determines a user\'s age based on a planets solar years.',
        languages: 'HTML, CSS, Bootstrap, JavaScript, Jest, Webpack, JSON, Babel, ESLint',
        githubLink: 'https://github.com/ZuriGa/Galactic-Age-Calculator',
    },
    {
        id: 2,
        title: 'Currency Exchanger',
        description: 'A currency exchange application with API.',
        languages: 'HTML, CSS, JavaScript, Bootstrap, Node, Webpack, ESLint, Babel',
        githubLink: 'https://github.com/ZuriGa/Currency-Exchanger',
    },
    {
        id: 3,
        title: 'Weekday Calculator App',
        description: 'Web application for calculating the day for any given date. It handles past dates and future dates.',
        languages: 'JavaScript, HTML, CSS',
        githubLink: 'https://github.com/ZuriGa/weekday-calculator-app',
    },
    {
        id: 4,
        title: 'Pizza Parlor',
        description: 'Website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.',
        languages: 'JavaScript, HTLM, CSS, TDD',
        githubLink: 'https://github.com/ZuriGa/pizza-parlor',
    }
];

const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <div className='project-list'>
                {projectsList.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
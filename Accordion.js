import { act } from '@testing-library/react';
import React from 'react'
import './Accordion.css'

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        activeIndex: null
    }

    handleSetActiveIndex = (index) => {
        this.setState({activeIndex: index})
    }

    renderContent(section, index, activeIndex) {
        return (
            <li className='item' key={index}>
                <button
                    type='button'
                    onClick={() => this.handleSetActiveIndex(index)}
                >
                    {section.title}
                </button>
                {(activeIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const {activeIndex} = this.state
        const {sections} = this.props
        return (
            <ul className='accordion'>
                {sections.map((section, index) =>
                this.renderContent(section, index, activeIndex)
                )}
            </ul>
        );
    }
}

export default Accordion
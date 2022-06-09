import React from 'react'

const TabComponent = (props) => {
    const { currentTab, setCurrentTab, allTabs } = props

    const tabStyle = index => {
        if (index === currentTab) {
            return 'button-active'
        } else {
            return 'button-inactive'
        }
    }

    return (
        <div>
            {allTabs.map((item, index) => (
                <button className={tabStyle(index)} onClick={e => setCurrentTab(index)}>
                    {''}
                    {item.title}
                </button>
            ))}
            <div className='display-content'>{allTabs[currentTab].content}</div>
        </div>
    )
}

export default TabComponent
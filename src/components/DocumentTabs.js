import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import shortid from 'shortid'

class DocumentTabs extends React.Component {
    render() {
        let input;
        let id = this.props.activeDocument.id === this.props.tabs[0].id ?
            this.props.tabs[1].id
            :
            this.props.tabs[0].id;
        return (
            <div>
                <span onClick={() => this.props.handleAddDocumentClick(shortid.generate())}>+</span>
                <Tabs
                    style={{display: 'inline', marginLeft: '10px'}}
                    selectedIndex={this.props.tabs.findIndex(t => t.active === true) || 0}
                >
                    <TabList style={{display: 'inline'}}>
                        {this.props.tabs.map(
                            (t) => (
                                <Tab
                                    key={t.id}
                                >
                                    <span
                                        onClick={() => this.props.handleTabClick(t.id)}
                                    >
                                        {t.title}
                                    </span>
                                    <span
                                        style={{marginLeft: '8px', color: 'red', fontSize: '.8em'}}
                                        onClick={() => this.props.handleDeleteDocumentClick(this.props.activeDocument.id, id)}
                                    >
                                        {t.active ? 'x' : null}
                                    </span>
                                </Tab>
                            )
                        )}
                    </TabList>
                    {this.props.tabs.map(
                        (t) => (
                            <TabPanel
                                key={t.id}
                            >
                                <span><i>Title:</i></span>
                                <input
                                    style={{marginLeft: '8px', marginTop: '15px'}}
                                    ref={node => input = node}
                                    type="text"
                                    value={t.title}
                                    onChange={() => this.props.handleTitleChange(input.value, this.props.activeDocument.id)}
                                />
                            </TabPanel>
                        )
                    )}
                </Tabs>
            </div>
        )
    }
}

export default DocumentTabs

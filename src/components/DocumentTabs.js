import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

class DocumentTabs extends React.Component {
    render() {
        return (
            <Tabs
                selectedIndex={this.props.tabs.findIndex(t => t.active === true)}
            >
                <TabList>
                    {this.props.tabs.map(
                        (t) => <Tab key={t.id} onClick={() => this.props.handleTabClick(t.id)}>{t.title}</Tab>
                    )}
                </TabList>
                {this.props.tabs.map(
                    (t) => <TabPanel key={t.id}><p>{t.title}</p></TabPanel>
                )}
            </Tabs>
        )
    }
}

export default DocumentTabs

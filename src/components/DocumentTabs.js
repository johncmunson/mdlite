import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import shortid from 'shortid'
// import { BreakpointProvider, Row, Column } from 'hedron'

class DocumentTabs extends React.Component {
    render() {
        let input;
        return (
            <div>
                <span onClick={() => this.props.handleAddDocumentClick(shortid.generate())}>+</span>
                <Tabs
                    selectedIndex={this.props.tabs.findIndex(t => t.active === true)}
                >
                    <TabList>
                        {this.props.tabs.map(
                            (t) => (
                                <Tab
                                    key={t.id}
                                    onClick={() => this.props.handleTabClick(t.id)}
                                >
                                    {t.title}
                                    <span
                                        style={{marginLeft: '8px', color: 'red', fontSize: '.8em'}}
                                        onClick={() => this.props.handleDeleteDocumentClick(this.props.activeDocument.id)}
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
                                    style={{marginLeft: '8px'}}
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

// class DocumentTabs extends React.Component {
//     render() {
//         return (
//             <BreakpointProvider breakpoints={{ sm: 50, md: 51 }}>
//                 <Row debug>
//                     <Column sm={1} md={1} lg={1}>
//                         <span>+</span>
//                     </Column>
//                     <Column sm={11} md={11} lg={11}>
//                         <Tabs
//                             selectedIndex={this.props.tabs.findIndex(t => t.active === true)}
//                         >
//                             <TabList>
//                                 {this.props.tabs.map(
//                                     (t) => <Tab key={t.id} onClick={() => this.props.handleTabClick(t.id)}>{t.title}</Tab>
//                                 )}
//                             </TabList>
//                             {this.props.tabs.map(
//                                 (t) => <TabPanel key={t.id}><p>{t.title}</p></TabPanel>
//                             )}
//                         </Tabs>
//                     </Column>
//                 </Row>
//             </BreakpointProvider>
//         )
//     }
// }

export default DocumentTabs

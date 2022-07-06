import React, {useEffect} from 'react'
import {
    Container,
    BlockOne,
    BlockTwo,
    Title,
    SettingMenu,
    Number,
    Icon,
    MenuItem,
    AddNavigationBlock,
    AddItem,
    SearchBar,
    Input,
    SaveBlock
} from './Styled'
import { ComposeIcon, SearchIcon, AddIcon } from '@fluentui/react-icons-northstar'
import { Tree,Button,Flex } from '@fluentui/react-northstar'
import {Data} from '../store/interfaces'
import { Link } from 'react-router-dom'

interface props {
    title: string;
    setData: React.Dispatch<React.SetStateAction<Array<Data>>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const Settings: React.FC<props> = ({ handleAdd,title,setTitle,setData }) => {
   
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storage = localStorage.getItem("Data")
            if (storage) {
                setData(JSON.parse(storage))
            }
        }
    },[])
    const items = [
        {
          id: 'item-1',
          title: 'Navigation Item 1',
        },
        {
          id: 'item-4',
          title: 'Navigation Item 2',
        },
        {
            id: 'item-5',
            title: 'Navigation Item 3',
            items: [
              {
                id: 'Sub-Navigation-Item-1',
                title: 'Sub Navigation Item 1',
                },
                {
                    id: 'Sub-Navigation-Item-2',
                    title: 'Sub Navigation Item 2',
                    items: [
                        {
                            id: "Sub-Sub-Navigation-Item-1",
                            title: 'Sub Sub Navigation Item 1'
                        }
                    ]
                },
            ],
        },
        {
            id: 'tree-title-customization-item-7',
            title: 'Navigation Item 4',
        },
        {
            id: 'tree-title-customization-item-9',
            title: 'Navigation Item 5',
        },
        {
            id: 'tree-title-customization-item-11',
            title: 'Navigation Item 6',
          },
      ]
    return (
        <Container>
            <BlockOne>
                <Title>Settings</Title>
                <hr />
                <SettingMenu>
                    <div>
                        <Title>
                            <Number>1</Number>
                            Settings
                        </Title>
                        <Link to={"/settings"}>
                            <MenuItem>
                                <Icon><ComposeIcon /> </Icon>
                                Step 1
                            </MenuItem>
                        </Link>
                        <Link to={"/settings"}>
                            <MenuItem>
                                <Icon><ComposeIcon /> </Icon>
                                Step 2
                            </MenuItem>
                        </Link>
                        <Link to={"/settings"}>
                            <MenuItem>
                                <Icon><ComposeIcon /> </Icon>
                                Step 3
                            </MenuItem>
                        </Link>
                    </div>
                    <div>
                        <Title>
                            <Number>2</Number>
                            Administration
                        </Title>
                        <Link to={'/settings'}>
                            <MenuItem>
                                <Icon><ComposeIcon /> </Icon>
                                Licensing
                            </MenuItem>
                        </Link>
                        <Link to={"/settings"}>
                            <MenuItem>
                                <Icon><ComposeIcon /></Icon>
                                Administrators
                            </MenuItem>
                        </Link>
                    </div>
                </SettingMenu>
            </BlockOne>
            <BlockTwo>
                <form onSubmit={handleAdd}>
                <Title>Configure Navigation</Title>
                <div>The Mega Menu can be configured here</div>
                <Title>Add navigation entries</Title>
                <div>Here's an example of how a section can be used to group inputs</div>
                <AddNavigationBlock>
                    <AddItem>
                        <Button primary>
                                <AddIcon size="small"/>
                            Add entry
                        </Button>
                        <SearchBar>
                            <Input
                                type="search"
                                placeholder="Search for a navigation entry"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Icon style={{position: "absolute",right:-15, top:-8}}><SearchIcon /></Icon>
                        </SearchBar>
                    </AddItem>
                    <Tree aria-label="Custom title" items={items} />
                   
                    <SaveBlock>
                        <Button content="Discard" secondary />
                        <Button type="submit" content="Save" primary />
                   </SaveBlock>
                </AddNavigationBlock>
                </form>
                
            </BlockTwo>
        </Container>
    )
}

export default Settings
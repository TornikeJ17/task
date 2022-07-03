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
    Button,
    SearchBar,
    Input,
    SaveBlock
} from './Styled'
import { ComposeIcon, SearchIcon, AddIcon } from '@fluentui/react-icons-northstar'
import { Tree } from '@fluentui/react-northstar'
import {Data} from '../store/interfaces'
import {Link} from 'react-router-dom'

interface props {
    data: string,
    setData: React.Dispatch<React.SetStateAction<string>>;
}
const Settings: React.FC<props> = ({ data,setData }) => {
    const SaveData = () => {
        localStorage.setItem('saveData', JSON.stringify(data))
    }
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
                <Title>Configure Navigation</Title>
                <div>The Mega Menu can be configured here</div>
                <Title>Add navigation entries</Title>
                <div>Here's an example of how a section can be used to group inputs</div>
                <AddNavigationBlock>
                    <AddItem>
                        <Button>
                            <span style={{width:10}}><AddIcon /></span>
                            Add entry
                        </Button>
                        <SearchBar>
                            <Input
                                type="search"
                                placeholder="Search for a navigation entry"
                                onChange={(e) => setData(e.target.value)}
                            />
                            <Icon style={{position: "absolute",right:-10}}><SearchIcon /></Icon>
                        </SearchBar>
                    </AddItem>
                    <Tree aria-label="Custom title" items={items} />
                   
                    <SaveBlock>
                    <button style={{
                        width: 100,
                        padding: 5,
                        background: "#FFF",
                        border: "1px solid  #ddd",
                        borderRadius: 5,
                        cursor:'pointer'

                    }}>Discard</button>
                    <button style={{
                        width: 50,
                        padding: 5,
                        color: '#FFF',
                        background: '#4e4e95',
                        border: 'none',
                        borderRadius: 5,
                        cursor:'pointer'
                        }}
                            onClick={SaveData}
                        >Save</button>
                   </SaveBlock>
                </AddNavigationBlock>
                
            </BlockTwo>
        </Container>
    )
}

export default Settings
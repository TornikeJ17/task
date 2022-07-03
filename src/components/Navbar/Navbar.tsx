import React,{useState,useRef} from 'react';
import { Container, LinkItems, Icon,DropdownMenu,SubMenu,BlockOne,BlockTwo,ItemBlock,Items } from './Styled'
import { MenuIcon,MoreIcon } from '@fluentui/react-icons-northstar'
import { Link } from 'react-router-dom'
import { Data } from "../store/interfaces"

interface props {
    data: string,
}
const Navbar: React.FC<props> = ({data}) => {
    const [show, setShow] = useState(false)
    const [selectItem, setSelectItem] = useState(1)
    const subMenu = [
        {
            label: 'Sub Menu Item 1',
            id:1,
            items: [
                {
                    optionItem:'My Career and Benefits',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                },
                {
                    optionItem:'My Career and Benefits',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                },
                {
                    optionItem: 'Traven and Expense',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                },
                {
                    optionItem: 'Traven and Expense',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Sub Menu Item 2',
            id:2,
            items: [
                {
                    optionItem:'My Career and Benefits',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                },
                {
                    optionItem:'My Career and Benefits',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 7'
                        }
                    ]
                },
                {
                    optionItem: 'Traven and Expense',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                },
                {
                    optionItem: 'Traven and Expense',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Sub Menu Item 3',
            id:3,
            items: [
                {
                    optionItem:'My Career and Benefits',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 20'
                        }
                    ]
                },
                {
                    optionItem:'My Career and Benefits',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                },
                {
                    optionItem: 'Traven and Expense',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                },
                {
                    optionItem: 'Traven and Expense',
                    items: [
                        {
                            title:'Item 1'
                        },
                        {
                            title:'Item 2'
                        },
                        {
                            title:'Item 3'
                        },
                        {
                            title:'Item 4'
                        },
                        {
                            title:'Item 5'
                        },
                        {
                            title:'Item 6'
                        }
                    ]
                }
            ]
        },
       
    ]
    const handleItemClick =  (selectedItem: number) => {
        setSelectItem(selectedItem)
    }
    return (
        <Container>
            <LinkItems>
                <Icon
                >
                    <MenuIcon
                        onMouseEnter={() => setShow(!show)}
                        onMouseOut={() => setShow(show)}
                    />
                </Icon>
                <Link to={'/MenuItem1'}><span>MenuItem1</span></Link>
                <Link to={'/MenuItem2'}><span>MenuItem2</span></Link>
                <Link to={'/MenuItem3'}><span>MenuItem3</span></Link>
                <Link to={'/MenuItem4'}><span>MenuItem4</span></Link>
                <Link to={'/MenuItem5'}><span>MenuItem5</span></Link>
                <Link to={'/settings'}> <Icon><MoreIcon /></Icon></Link>
            </LinkItems>
            {show ? (
                <DropdownMenu>  
                    <BlockOne>
                        {
                            subMenu.map((item, index) => (
                                 <SubMenu onClick={() => handleItemClick(index)} key={index}>
                                    {item.label}
                                </SubMenu>
                            ))
                        }
                    </BlockOne>
                    <BlockTwo>
                        {
                            subMenu.map((item, index) => (
                                selectItem === index && (
                                    <ItemBlock key={index} >
                                    {item.items.map((item, index) => (
                                     <Items key={index}>
                                         <div> {item.optionItem}</div>
                                            <div>
                                                {item?.items.map((item, index) => (
                                                    <div style={{padding:10}}>{item.title}</div>
                                                ))}
                                            </div>
                                     </Items>
                                    ))}
                                    <Items>{localStorage.getItem('saveData')}</Items>
                                 </ItemBlock>
                                    )
                             ))
                        }

                    </BlockTwo>
                    
                </DropdownMenu>
            ) : null}
        </Container>
    )
}

export default Navbar
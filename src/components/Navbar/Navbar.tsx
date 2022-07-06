import React,{useState,useEffect} from 'react';
import { Container, LinkItems, Icon,DropdownMenu,SubMenu,BlockOne,BlockTwo,ItemBlock,Items } from './Styled'
import { MenuIcon,MoreIcon } from '@fluentui/react-icons-northstar'
import { Link } from 'react-router-dom'
import { Data } from "../store/interfaces"
import {Dummy} from '../store/Dummy'
interface props {
    data:Array<Data>
}
const Navbar: React.FC<props> = ({data}) => {
    const [show, setShow] = useState(false)
    const [selectItem, setSelectItem] = useState(1)
    localStorage.setItem('Dummy Data', JSON.stringify(Dummy))
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
                            Dummy.map((item, index) => (
                                <SubMenu onClick={() => handleItemClick(index)} key={index}>
                                    <>
                                    {item.label}
                                    </>
                                </SubMenu>
                            ))
                        }
                    </BlockOne>
                    <BlockTwo>
                        {
                            Dummy.map((item, index) => (
                                selectItem === index && (
                                    <ItemBlock key={index} >
                                    {item.items.map((item, index) => (
                                     <Items key={index}>
                                         <div> {item.optionItem}</div>
                                            <div>
                                                {item?.items.map((item, index) => (
                                                    <div style={{ padding: 10 }} key={index}>
                                                        <Link to={item.title} style={{textDecoration:"none",color:"#222"}}>{item.title}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                     </Items>
                                    ))}
                                 </ItemBlock>
                                    )
                             ))
                        }
                        <ItemBlock>
                            {data.map((item, index) => (
                                <Items key={index}>
                                    <div style={{ padding: 10 }} key={index}>
                                        <Link to={item.title} style={{textDecoration:"none",color:"#222"}}>{item.title}</Link>
                                    </div>
                                </Items>
                            ))}
                        </ItemBlock>
                    </BlockTwo>
                   
                </DropdownMenu>
            ) : null}
        </Container>
    )
}

export default Navbar
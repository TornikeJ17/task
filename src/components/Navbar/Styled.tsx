import styled from 'styled-components'

export const Container = styled.div`
    padding:15px;
    background:#eee;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    position:relative;
    z-index:10000;
    `
export const LinkItems = styled.div`
    display:flex;
    width:600px;
    max-width:100%;
    justify-content:space-between;
    align-items:center;
    a{
        text-decoration:none;
        color:#222;
        span{
            padding:10px;
            border-radius:5px;
            :hover{
                background:#dddc;
            }
        }
    }
    
`
export const Icon = styled.div`
    width:20px;
    max-width:100%;
    cursor:pointer;
`
export const DropdownMenu = styled.div`
    display:flex;
    position:absolute;
    width:800px;
    max-width:100%;
    top:70px;
    left:40px;
    background:#eee;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;   
    
`

export const SubMenu = styled.div`
    padding:10px;
   :hover{
        Background:#FFF;
        cursor:pointer;
   }
`
export const BlockOne = styled.div`
    width:300px;
    max-width:100%;
`
export const BlockTwo = styled.div`
    width:500px;
    max-width:100%;
    padding:10px;
    background:#fff;
`
export const ItemBlock = styled.div`
   display:flex;
   flex-flow:wrap;
   :focus{
        background:#fff;
   }

`
export const Items = styled.div`
   width: 200px;
   max-width:100%;
   padding:10px;
`
import styled from "styled-components"

export const Container = styled.div`
    background:#FFF;
    width:100%;
    height:100vh;
    display:flex;
    a{
        text-decoration:none;
        color:#222;
    }
`
export const BlockOne = styled.div`
    width:20%;
    border-right:1px solid #eee;
    padding:10px;
`
export const BlockTwo = styled.div`
    border-left: 1px solid #eee;
    width:80%;
    padding:10px;
    position:relative;
`
export const Title = styled.h3`
display:flex;
`
export const Number = styled.div`
    width:25px;
    height:25px;
    text-align:center;
    border-radius:50%;
    color:#FFF;
    background:#5b5fc7;
    margin-right:10px;
`
export const SettingMenu = styled.div`

`
export const Icon = styled.div`
    margin-right:10px;
    padding:10px;
`
export const MenuItem = styled.div`
    display:flex;
    align-items:center;
    cursor: pointer;
    :hover{
        background:#dddc;
    }
`
export const AddNavigationBlock = styled.div`
    margin-top:2rem;
    height:500px;
    position:relative;
`
export const AddItem = styled.div`
    display:flex;
    align-items:center;
    width:450px;
    justify-content:space-between;
    margin-bottom:2rem;
    .ui-icon{
        position:relative;
        right:10px;
        top:1px;
    }
`
export const Input = styled.input`
    width:300px;
    max-width:100%;
    padding:3px;
`
export const Button = styled.button`
    display:flex;
    align-items:center;
    width:80px;
    justify-content:space-between;
    background:#4e4e95;
    color:#FFF;
    border:none;
    border-radius:5px;
    padding:5px;
    cursor:pointer;
`

export const SearchBar = styled.div`
    position:relative;
    display:flex;
    align-items:center;
`
export const SaveBlock = styled.div`
    position:absolute;
    bottom:2rem;
    right:2rem;
    width:200px;
    display:flex;
    justify-content:space-between;
`
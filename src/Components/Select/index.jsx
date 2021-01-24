import React from 'react'
import Styled from './styled'

const { DropDown, DropDownHeader, DropDownBody, DropDownItem, Label } = Styled

const Select = ({ show, language, items, onClick, pickLanguage }) => {
    return (
        <>
            <Label>Язык</Label>
            <DropDown>
                <DropDownHeader show={show} onClick={onClick}>
                    {language}
                </DropDownHeader>
                <DropDownBody show={show}>
                    {items.map((i, index) => (
                        <DropDownItem
                            key={index}
                            onClick={() => pickLanguage(index)}
                        >
                            {i}
                        </DropDownItem>
                    ))}
                </DropDownBody>
            </DropDown>
        </>
    )
}

export default Select

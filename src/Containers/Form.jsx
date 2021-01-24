import React from 'react'
import { observer } from 'mobx-react-lite'
import formStore from '../Store/FormStore'
import Button from '../Components/Button'
import Checkbox from '../Components/Checkbox'
import Input from '../Components/Input'
import Select from '../Components/Select'
import Title from '../Components/Title'
import StyledError from '../Components/Error'
import FormItem from '../Components/FormItem'
import Styled from './styled'

const Form = observer(() => {
    const {
        items,
        changeDropdownVisible,
        dropdownShow,
        dropdownLanguage,
        changeDropdownLanguage,
        changeCheckboxState,
        checkboxChecked,
        formData,
        changeInputValue,
        buttonDisabled,
        submitButton,
    } = formStore

    const { StyledForm, P, A } = Styled

    return (
        <StyledForm>
            <FormItem top>
                <Title>Регистрация</Title>
                <P>
                    Уже есть аккаунт? <A href={'/'}>Войти?</A>
                </P>
            </FormItem>
            <FormItem>
                <Input
                    placeholder={'Введите Ваше имя'}
                    onChange={changeInputValue}
                    label={'Имя'}
                    name={'name'}
                />
                <StyledError show={formData.name.hasError} />
            </FormItem>
            <FormItem>
                <Input
                    placeholder={'Введите ваш email'}
                    label={'Еmail'}
                    type={'email'}
                    name={'email'}
                    onChange={changeInputValue}
                />
                <StyledError show={formData.email.hasError} />
            </FormItem>
            <FormItem>
                <Input
                    placeholder={'Введите номер телефона'}
                    label={'Номер телефона'}
                    type={'text'}
                    name={'phone'}
                    onChange={changeInputValue}
                />
                <StyledError show={formData.phone.hasError} />
            </FormItem>
            <FormItem>
                <Select
                    show={dropdownShow}
                    onClick={changeDropdownVisible}
                    items={items}
                    language={dropdownLanguage}
                    pickLanguage={changeDropdownLanguage}
                />
            </FormItem>
            <FormItem>
                <Checkbox
                    checked={checkboxChecked}
                    onChange={changeCheckboxState}
                />
            </FormItem>
            <FormItem>
                <Button
                    disabled={buttonDisabled}
                    text={'Зарегистрироваться'}
                    onClick={submitButton}
                />
            </FormItem>
        </StyledForm>
    )
})

export default Form

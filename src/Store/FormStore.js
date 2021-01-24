import { makeAutoObservable, autorun } from 'mobx'

class FormStore {
    //dropdown state
    dropdownShow = false
    dropdownLanguage = 'Язык'
    items = ['Русский', 'Английский', 'Китайский', 'Испанский']

    //checkbox state
    checkboxChecked = false

    //form state
    formData = {
        name: {
            value: '',
            hasError: true,
        },
        phone: {
            value: '',
            hasError: true,
        },
        email: {
            value: '',
            hasError: true,
        },
    }

    //submit button state
    buttonDisabled = true

    constructor() {
        makeAutoObservable(this)

        autorun(() => this.checkErrors())
    }

    //dropdown open/close
    changeDropdownVisible = () => {
        this.dropdownShow = !this.dropdownShow
    }

    //change dropdown language
    changeDropdownLanguage = (index) => {
        this.dropdownLanguage = this.items[index]
        this.changeDropdownVisible()
    }

    //change checkbox checked
    changeCheckboxState = (e) => {
        this.checkboxChecked = e.target.checked
    }

    //change input value
    changeInputValue = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.validateInput(name, value)
        this.formData[name].value = value
    }

    //validate input value
    validateInput = (name, value) => {
        switch (name) {
            case 'name':
                if (/\d|[^\w-\s]/gm.test(value) || value.length === 0) {
                    this.formData[name].hasError = true
                } else {
                    this.formData[name].hasError = false
                }
                break
            case 'email':
                if (!/\w+@\w+\.\w+/gm.test(value) || value.length === 0) {
                    this.formData[name].hasError = true
                } else {
                    this.formData[name].hasError = false
                }
                break
            case 'phone':
                if (
                    !/[\\+\d\\(\\)\s\\-]/gm.test(value) ||
                    value.replace(/\D/g, '').length > 11
                ) {
                    this.formData[name].hasError = true
                    console.log(value.length)
                } else {
                    this.formData[name].hasError = false
                }
                break
            default:
                break
        }
    }

    //disabled button if formData has errors
    checkErrors() {
        const check = Object.values(this.formData).filter(
            (e) => e.hasError === true
        )
        check.length
            ? (this.buttonDisabled = true)
            : (this.buttonDisabled = false)
    }

    submitButton = (e) => {
        e.preventDefault()
        console.log('Form Data', this.formData)
        console.log('Rules', this.checkboxChecked)
    }
}

export default new FormStore()

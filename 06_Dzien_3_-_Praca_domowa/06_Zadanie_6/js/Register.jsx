import React, { useState } from 'react';

// Funkcja walidująca kod pocztowy
function validatePostalCode(postalCode) {
    const postalCodeRegex = /^\d{2}-\d{3}$|^\d{5}$/;
    return postalCodeRegex.test(postalCode);
}

// Funkcja walidująca formularz
function validateForm(formData) {
    const errors = {};

    // Walidacja imienia
    if (formData.name.length < 5) {
        errors.name = "Imię musi mieć co najmniej 5 znaków";
    }

    // Walidacja nazwiska
    if (formData.lastName.length < 5) {
        errors.lastName = "Nazwisko musi mieć co najmniej 5 znaków";
    }

    // Walidacja emaila
    if (formData.email.length < 3 || !formData.email.includes('@')) {
        errors.email = "Podaj poprawny adres email";
    }

    // Walidacja hasła
    if (formData.password.length < 4) {
        errors.password = "Hasło musi mieć co najmniej 4 znaki";
    }

    // Walidacja powtórzonego hasła
    if (formData.password !== formData.repeatPassword) {
        errors.repeatPassword = "Hasła nie pasują do siebie";
    }

    // Walidacja kodu pocztowego
    if (!validatePostalCode(formData.postalCode)) {
        errors.postalCode = "Podaj poprawny kod pocztowy";
    }

    // Walidacja miasta
    if (formData.city.length < 2) {
        errors.city = "Miasto musi mieć co najmniej 2 znaki";
    }

    // Walidacja adresu
    if (formData.address.length < 3) {
        errors.address = "Adres musi mieć co najmniej 3 znaki";
    }

    return errors;
}

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        gender: '',
        address: '',
        postalCode: '',
        city: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm(formData);
        setErrors(formErrors);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Dane osobowe</p>

                    <label>Imię</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    {errors.name && <div>{errors.name}</div>}

                    <label>Nazwisko</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
                    {errors.lastName && <div>{errors.lastName}</div>}

                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    {errors.email && <div>{errors.email}</div>}

                    <label>Hasło</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                    {errors.password && <div>{errors.password}</div>}

                    <label>Powtórz hasło</label>
                    <input type="password" name="repeatPassword" value={formData.repeatPassword}
                           onChange={handleChange}/>
                    {errors.repeatPassword && <div>{errors.repeatPassword}</div>}

                    <label>Płeć</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="girl">girl</option>
                        <option value="boy">boy</option>
                    </select>
                </div>

                <div>
                    <p>Dane do wysyłki</p>

                    <label>Adres</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange}/>
                    {errors.address && <div>{errors.address}</div>}

                    <label>Kod Pocztowy</label>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange}/>
                    {errors.postalCode && <div>{errors.postalCode}</div>}

                    <label>Miasto</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange}/>
                    {errors.city && <div>{errors.city}</div>}
                </div>

                <button type="submit">Zapisz</button>
            </form>

            <p>Podsumowanie:</p>
            <ul>
                <li>Imię: {formData.name}</li>
                <li>Nazwisko: {formData.lastName}</li>
                <li>Email: {formData.email}</li>
                <li>Płeć: {formData.gender}</li>
                <li>Adres: {formData.address}</li>
                <li>Kod pocztowy: {formData.postalCode}</li>
                <li>Miasto: {formData.city}</li>
            </ul>
        </>
    );
};

export default Register;
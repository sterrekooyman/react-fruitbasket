import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import { useForm } from "react-hook-form";

function App() {


    const [count, setCount] = React.useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    });


    function increment(e) {
        setCount({
            ...count,
            [e.target.name] : count[e.target.name] + 1,
        });
    }

    function decrement(e) {
        setCount({
            ...count,
            [e.target.name] : count[e.target.name] - 1,
        });
    }

    function resetCounters(e) {
        setCount({
            strawberries: 0,
            bananas: 0,
            apples: 0,
            kiwis: 0
        });
    }

    const { register, handleSubmit } = useForm();

    function onFormSubmit(data) {
        console.log(data);
        console.log("Submitted!")
    }


    return (

        <>
            <fieldset>

                <h1>Fruitmand bezorgservice</h1>
                <Counter
                    title="Strawberries"
                    name="strawberries"
                    count = {count.strawberries}
                    increment = {increment}
                    decrement = {decrement}
                />

                <Counter
                    title="Bananas"
                    name="bananas"
                    count = {count.bananas}
                    increment = {increment}
                    decrement = {decrement}
                />

                <Counter
                    title="Apples"
                    name="apples"
                    count = {count.apples}
                    increment = {increment}
                    decrement = {decrement}
                />

                <Counter
                    title="Kiwi's"
                    name="kiwis"
                    count = {count.kiwis}
                    increment = {increment}
                    decrement = {decrement}
                />

                <Button
                    name="reset"
                    type="reset"
                    version='reset'
                    onChange={resetCounters}>
                    Reset
                </Button>
            </fieldset>


            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>Gegevens</legend>

                    <label htmlFor="firstname">
                        Voornaam
                        <input
                            type="text"
                            {...register("firstname")}
                            id="firstname"
                        />
                    </label>

                    <label htmlFor="lastname">
                        Achternaam
                        <input
                            type="text"
                            id="lastname"
                            {...register("lastname")}
                        />
                    </label>

                    <label htmlFor="age">
                        Leeftijd
                        <input
                            type="number"
                            id="age"
                            {...register("age")}
                        />
                    </label>

                    <label htmlFor="zipcode">
                        Postcode
                        <input
                            type="number"
                            id="zipcode"
                            {...register("zipcode")}
                        />
                    </label>

                    Bezorgfrequentie

                    <label htmlFor="delivery-frequency">
                        <select
                            id="delivery-frequency"
                            {...register("delivery")}
                        >
                            <option value="weekly">Iedere week</option>
                            <option value="everyOtherWeek">Om de week</option>
                            <option value="monthly">Iedere maand</option>
                        </select>
                    </label>

                    <input
                        type="radio"
                        {...register("day")}
                    /> Overdag


                    <input
                        type="radio"
                        {...register("evening")}
                    /> 's Avonds


                    <label htmlFor="comments">
                        Opmerkingen
                        <textarea
                            id="comments"
                            {...register("comments")}
                            rows="10"
                            cols="30">
                    </textarea>
                    </label>

                    <label htmlFor="terms-and-conditions">
                        <input
                            type="checkbox"
                            id="terms-and-conditions"
                            {...register("terms-and-conditions")}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>

                    <Button
                        name="submit"
                        type="submit"
                        version='submit'
                        onChange={onFormSubmit}>
                        Submit
                    </Button>

                </fieldset>
            </form>


        </>
    );
}

export default App;


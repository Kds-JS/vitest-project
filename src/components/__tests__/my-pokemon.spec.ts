import {fireEvent, render, screen} from '@testing-library/vue';
import { describe, it, expect } from 'vitest';

import myPokemon from '../my-pokemon.vue';

describe('View', () => {

    it("render span correctly", async () => {
      //arrange
      render(myPokemon);
  
      const pokemon = await screen.findByText("Get Pokemon");
    await fireEvent.click(pokemon);
    // const value = await screen.findByText("bulbasaur");

    const value = await screen.findAllByRole('listitem');

      //asert
    //   expect(value.innerHTML).toBe("bulbasaur");
    expect(value).toHaveLength(20);

    });

    // it("snap shot matches", () => {
    //   const wrapper = render(myPokemon, { props: { element: "div" } });
    //   expect(wrapper).toMatchSnapshot();
    // });

});
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyButton from '@webvue/components/MyButton.vue';

describe('MyButton', () => {
  
  it('affiche le message initial correct', () => {
    const wrapper = mount(MyButton);

    // Vérifie le texte du bouton : "Click me" + " !"
    expect(wrapper.find('button').text()).toBe('Click me !');
    
    // Vérifie la valeur initiale de l'input
    // (Note: on caste en HTMLInputElement pour que TS soit content avec .value)
    const input = wrapper.find('input').element as HTMLInputElement;
    expect(input.value).toBe('Click me');
  });

  it('change le texte au clic sur le bouton', async () => {
    const wrapper = mount(MyButton);

    // 1. On cherche le bouton
    const button = wrapper.find('button');
    
    // 2. On simule le clic
    // IMPORTANT : il faut 'await' car le DOM met un micro-temps à se rafraichir
    await button.trigger('click');

    // 3. On vérifie que le texte a changé ("Clicked" + " !")
    expect(button.text()).toBe('Clicked !');
  });

  it('met à jour le texte quand on écrit dans l\'input (v-model)', async () => {
    const wrapper = mount(MyButton);
    const input = wrapper.find('input');

    // Simule une saisie utilisateur
    await input.setValue('Nouveau texte');

    // Vérifie que le bouton a bien réagi (réactivité Vue)
    expect(wrapper.find('button').text()).toBe('Nouveau texte !');
  });

});

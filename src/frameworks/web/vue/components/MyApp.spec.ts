import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyApp from '@webvue/components/MyApp.vue';

describe('MyApp', () => {
  it('affiche le bon message et contient le titre', () => {
    const wrapper = mount(MyApp, {
      global: {
        // On "stub" (simule) MyButton. 
        // Ça évite les erreurs si l'enfant est complexe ou utilise des stores/router.
        stubs: {
          MyButton: true 
        }
      }
    });

    // Vérifie que le texte de ta variable 'msg' est bien présent
    expect(wrapper.text()).toContain('Hello World !');

    // Vérifie que la structure HTML (la classe .title) est bonne
    const title = wrapper.find('.title');
    expect(title.exists()).toBe(true);
    
    // Vérifie que la couleur définie par Stylus ne casse pas le test 
    // (Note: JSDOM ne calcule pas toujours les styles CSS réels, 
    // on vérifie surtout la présence des classes)
    expect(title.classes()).toContain('title');
  });

  it('affiche le composant enfant MyButton', () => {
    const wrapper = mount(MyApp, {
        global: { stubs: { MyButton: true } }
    });

    // On vérifie que le composant <MyButton /> est bien présent dans le DOM
    // (Même s'il est stubbé, il apparaitra comme <my-button-stub>)
    expect(wrapper.findComponent({ name: 'MyButton' }).exists()).toBe(true);
  });
});
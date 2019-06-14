import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('Heroes Component', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroeServices;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'Superman', strength: 8 },
            { id: 2, name: 'Batman', strength: 18 },
            { id: 3, name: 'Superman', strength: 20 },
        ]

        mockHeroeServices = jasmine.createSpyObj(['getHeroes', 'deleteHero', 'addHero']);

        component = new HeroesComponent(mockHeroeServices);
    })



    describe('Delete', () => {
        it('shoudlr remove hero from the heros list', () => {
            mockHeroeServices.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(component.heroes.length).toBe(2)
        })
    })

})

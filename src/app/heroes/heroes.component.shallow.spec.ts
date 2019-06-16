import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";

 describe('Heroes Component Shallow Test', () => {
    let fixture:ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES:any[];
    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'Superman', strength: 8 },
            { id: 2, name: 'Batman', strength: 18 },
            { id: 3, name: 'Superman', strength: 20 },
        ]

        mockHeroService = jasmine.createSpyObj(['addHero','deleteHero','getHeroes'])

        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(HeroesComponent);
        
    }) 

    xit('should set the correct heroes array',() => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toEqual(3)
    })
    
 })
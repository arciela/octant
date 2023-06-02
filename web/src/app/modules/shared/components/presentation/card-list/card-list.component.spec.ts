import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CardListComponent } from './card-list.component'
import { CardListView } from '../../../models/content'
import { SharedModule } from '../../../shared.module'
import { IndicatorComponent } from '../indicator/indicator.component'

describe('CardListComponent', () => {
  let component: CardListComponent
  let fixture: ComponentFixture<CardListComponent>

  beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [IndicatorComponent],
          imports: [SharedModule]
        }).compileComponents()
      })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent)
    component = fixture.componentInstance

    component.view = {
      config: { cards: [] },
      metadata: { type: 'cardsList' }
    } as CardListView

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

// Copyright (c) 2019 the Octant contributors. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { EditorComponent } from '../../smart/editor/editor.component'

import { LabelSelectorComponent } from './label-selector.component'

describe('LabelSelectorComponent', () => {
  let component: LabelSelectorComponent
  let fixture: ComponentFixture<LabelSelectorComponent>

  beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [
            LabelSelectorComponent,
            EditorComponent
          ]
        }).compileComponents()
      })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelSelectorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

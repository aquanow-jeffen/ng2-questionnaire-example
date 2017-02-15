import { Component, OnInit } from '@angular/core';

import { QuestionnaireModel, QuestionnaireState } from '../shared/model/questionnaire.models';
import { QuestionType } from '../shared/model/question.model';

declare var $: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private questionnaire: QuestionnaireModel;
  private id: string;

  constructor() {
    this.questionnaire = {
      title: '',
      starter: '',
      ending: '',
      state: QuestionnaireState.Created,
      questionList: []
    };
  }

  ngOnInit() {
    $('.menu .item').tab();
  }

  onAddQuestion(type: QuestionType) {
    console.log('传入问题类型：', type);
    switch (type) {
      case QuestionType.Text: // Warn: There should be something...
      case QuestionType.Score:
        this.questionnaire.questionList.push({
          title: '问题标题',
          type: type,
          answer: ''
        });
        break;
      case QuestionType.SingleSelect:
       this.questionnaire.questionList.push({
         title: '问题标题',
         type: type,
         options: [{'key': 0, 'value': '选项1'}],
         answer: ''
       });
        break;
      case QuestionType.MultiSelect:
        this.questionnaire.questionList.push({
          title: '问题标题',
          type: type,
          options: [{'key': 0, 'value': '选项1'}],
          answer: {}
        });
          break;
    }
  }

}

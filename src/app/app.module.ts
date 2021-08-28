import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReadAloudComponent } from './speaking-module/read-aloud/read-aloud.component';
import { SpeakingComponent } from './speaking-module/speaking/speaking.component';
import { RepeatSentenceComponent } from './speaking-module/repeat-sentence/repeat-sentence.component';
import { DescribeImageComponent } from './speaking-module/describe-image/describe-image.component';
import { RetellLectureComponent } from './speaking-module/retell-lecture/retell-lecture.component';
import { AnswerShortQuestionsComponent } from './speaking-module/answer-short-questions/answer-short-questions.component';
import { WritingComponent } from './writing-module/writing/writing.component';
import { SummarizeWrittenTextComponent } from './writing-module/summarize-written-text/summarize-written-text.component';
import { WriteAssayComponent } from './writing-module/write-assay/write-assay.component';
import { ReadingComponent } from './reading-module/reading/reading.component';
import { McSingleAnswerComponent} from './reading-module/mc-single-answer/mc-single-answer.component';
import { McMultipleAnswerComponent } from './reading-module/mc-multiple-answer/mc-multiple-answer.component';
import { ReorderParagraphsComponent } from './reading-module/reorder-paragraphs/reorder-paragraphs.component';
import { ReadingFillBlanksComponent } from './reading-module/reading-fill-blanks/reading-fill-blanks.component';
import { RwFillBlanksComponent } from './reading-module/rw-fill-blanks/rw-fill-blanks.component';
import { DragDropDirective } from './reading-module/reorder-paragraphs/reorder-paragraphs.directive';
import { DisqusComponent } from './disqus.component';

@NgModule({
  declarations: [
    AppComponent,
    DisqusComponent,
    HomeComponent,
    ReadAloudComponent,
    SpeakingComponent,
    RepeatSentenceComponent,
    DescribeImageComponent,
    RetellLectureComponent,
    AnswerShortQuestionsComponent,
    WritingComponent,
    SummarizeWrittenTextComponent,
    WriteAssayComponent,
    ReadingComponent,
    McSingleAnswerComponent,
    McMultipleAnswerComponent,
    ReorderParagraphsComponent,
    ReadingFillBlanksComponent,
    RwFillBlanksComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpeakingComponent } from './speaking-module/speaking/speaking.component';
import { ReadAloudComponent } from './speaking-module/read-aloud/read-aloud.component';
import { RepeatSentenceComponent } from './speaking-module/repeat-sentence/repeat-sentence.component';
import { DescribeImageComponent } from './speaking-module/describe-image/describe-image.component';
import { RetellLectureComponent } from './speaking-module/retell-lecture/retell-lecture.component';
import { AnswerShortQuestionsComponent } from './speaking-module/answer-short-questions/answer-short-questions.component';
import { WritingComponent } from './writing-module/writing/writing.component';
import { SummarizeWrittenTextComponent } from './writing-module/summarize-written-text/summarize-written-text.component';
import { WriteAssayComponent } from './writing-module/write-assay/write-assay.component';
import { ReadingComponent } from './reading-module/reading/reading.component';
import { McSingleAnswerComponent } from './reading-module/mc-single-answer/mc-single-answer.component';
import { McMultipleAnswerComponent } from './reading-module/mc-multiple-answer/mc-multiple-answer.component';
import { ReorderParagraphsComponent } from './reading-module/reorder-paragraphs/reorder-paragraphs.component';
import { ReadingFillBlanksComponent } from './reading-module/reading-fill-blanks/reading-fill-blanks.component';
import { RwFillBlanksComponent } from './reading-module/rw-fill-blanks/rw-fill-blanks.component';
import { ListeningComponent } from './listening-module/listening/listening.component';
import { SummarizeSpokenTextComponent } from './listening-module/summarize-spoken-text/summarize-spoken-text.component';
import { ListeningMcAnswersComponent } from './listening-module/listening-mc-answers/listening-mc-answers.component';
import { ListeningFillBlanksComponent } from './listening-module/listening-fill-blanks/listening-fill-blanks.component';
import { HighlightCorrectSummaryComponent } from './listening-module/highlight-correct-summary/highlight-correct-summary.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'speaking', component: SpeakingComponent },
{ path: 'read-aloud', component: ReadAloudComponent },
{ path: 'repeat-sentence', component: RepeatSentenceComponent },
{ path: 'describe-image', component: DescribeImageComponent },
{ path: 'retell-lecture', component: RetellLectureComponent },
{ path: 'answer-short-questions', component: AnswerShortQuestionsComponent },
{ path: 'writing', component: WritingComponent },
{ path: 'summarize-written-text', component: SummarizeWrittenTextComponent },
{ path: 'write-assay', component: WriteAssayComponent },
{ path: 'reading', component: ReadingComponent },
{ path: 'mc-single-answer', component: McSingleAnswerComponent },
{ path: 'mc-multiple-answers', component: McMultipleAnswerComponent },
{ path: 'reorder-paragraphs', component: ReorderParagraphsComponent },
{ path: 'reading-fill-blanks', component: ReadingFillBlanksComponent },
{ path: 'rw-fill-blanks', component: RwFillBlanksComponent },
{ path: 'listening', component: ListeningComponent },
{ path: 'summarize-spoken-text', component: SummarizeSpokenTextComponent },
{ path: 'listening-mc-answers', component: ListeningMcAnswersComponent },
{ path: 'listening-fill-blanks', component: ListeningFillBlanksComponent },
{ path: 'highlight-correct-summary', component: HighlightCorrectSummaryComponent },
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

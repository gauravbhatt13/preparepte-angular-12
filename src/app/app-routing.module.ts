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
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

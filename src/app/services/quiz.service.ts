import { Injectable } from '@angular/core';
import { category } from '../interfaces/category';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { quizCategories } from '../interfaces/quiz_categories';
import { quiz } from '../interfaces/quiz';
import { user } from '../interfaces/user';
import { quizResult } from '../interfaces/quiz_result';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
 
  constructor(private httpClient: HttpClient) { }

  private mainURL:string="https://bestify-java.herokuapp.com";

  // DONE

//category of type category interface
   category:category[]=[];
   private categoryUrl=this.mainURL+'/api/categories';
 
   getCategories(): Observable<category[]> 
   {
    //  console.log("quiz.service ; getCategories()");
     return this.httpClient.get<category[]>(this.categoryUrl);
   }

   ////////////////////////////////////////////////////////////////////////////

// DONE

   //quizCategory of type quizCategories interfac
   quizCategory:quizCategories[]=[];
   private quizcategoryUrl=this.mainURL+'/api/quizcategories';
 
   getQuizCat():Observable<quizCategories[]>
   {
    //  console.log("quiz.service ; getQuizCat()");
     return this.httpClient.get<quizCategories[]>(this.quizcategoryUrl);
   }

   //////////////////////////////////////////////////////////////

// PS : I DONT THINK ANYONE IS CALLING THIS METHOD. 

   //quize of type quiz interface
   quize:quiz[]=[];
   private quizeurl=this.mainURL+'/api/quizes';
 
  getquizes():Observable<quiz[]>
  {
    // console.log("quiz.service ; getquizes()");
    return this.httpClient.get<quiz[]>(this.quizeurl);
  }


  ////////////////////////////////////////////////////////////////

  // DONE

   // quizes with id
   private quizeurlwithid=this.mainURL+'/api/quizes/getSpecificQuizes/';
    

  getquizesbyid(id:number):Observable<quiz[]>
  {
    // console.log(" inside service : ", id);
    // console.log("quiz.service ; getquizesbyid ; ");
    return this.httpClient.get<quiz[]>(this.quizeurlwithid+id);
  }

///////////////////////////////////////////////////////////////

// PS: I DONT THINK ANYONE IS CALLING THIS METHOD

   //api for fetching user from database
   users: user[]=[];
   private UserUrl=this.mainURL+'/api/users';

   getUsers(): Observable<user[]> {
    // console.log("quiz.service ; getUsers() ; ");
    return this.httpClient.get<user[]>(this.UserUrl)
  }


/////////////////////////////////////////////////////////////

// PS: I DONT THINK ANYONE IS CALLING THIS METHOD

   // An array to store all the quiz Result
   quizResults:quizResult[]=[];
   private QuizResultUrl=this.mainURL+'/api/quizeresult';


   getQuizResult(): Observable<quizResult[]> {
    // console.log("quiz.service ; getQuizResult()");
    return this.httpClient.get<quizResult[]>(this.QuizResultUrl)
  }

  //////////////////////////////////////////////////////////////////

// DONE

     //search quiz by title
  private searchByTitle=this.mainURL+'/api/quizes/findAll/';
 

  getquizeByTitle(quizName:any):Observable<quiz[]>
  {
    // console.log("quiz.service ; getquizeByTitle() ; ");
    return this.httpClient.get<quiz[]>(this.searchByTitle+quizName);
  }

}


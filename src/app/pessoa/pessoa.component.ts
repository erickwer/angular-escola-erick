import { Component, OnInit } from '@angular/core';
import {PessoasService} from '../pessoas.service'
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: PessoasService;
  
    constructor(private pessoasService: PessoasService,
                private route: ActivatedRoute,
                private router: Router) {
    }
  
    ngOnInit() {
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.pessoasService.getPessoa(id)
        .subscribe(pessoa => this.pessoa = pessoa);
    }
  }
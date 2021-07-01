﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SpMedGrup.webApi.Domains
{
    public partial class Clinica
    {
        public Clinica()
        {
            Medicos = new HashSet<Medico>();
        }

        public int IdClinica { get; set; }
        public string Endereco { get; set; }
        public string RazaoSocial { get; set; }
        public string Cnpj { get; set; }
        public string NomeFantasia { get; set; }
        public string HorarioDeAbertura { get; set; }
        public string HorarioDeEncerrar { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
    }
}

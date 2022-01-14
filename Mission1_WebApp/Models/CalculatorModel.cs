using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission1_WebApp.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public float Assts { get; set; }

        [Required]
        [Range(0, 100)]
        public float GroupProjects { get; set; }

        [Required]
        [Range(0, 100)]
        public float Quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public float Exam { get; set; }

        [Required]
        [Range(0, 100)]
        public float Intex { get; set; }

    }
}

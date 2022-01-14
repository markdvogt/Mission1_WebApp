using Microsoft.AspNetCore.Mvc;
using Mission1_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission1_WebApp.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calculate() 
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calculate(CalculatorModel model) 
        {
            return View();
        }
    }
}

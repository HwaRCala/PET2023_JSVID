using Microsoft.AspNetCore.Mvc;
using Proyecto1.Models;

namespace Proyecto1.Controllers

{
    [ApiController]
    [Route("cliente")]
    public class ClienteController : ControllerBase
    {
        [HttpGet]
        [Route("listar")]
        public dynamic listarCliente()
        {

            List<Cliente> clientes = new List<Cliente>
            {
                new Cliente
                {
                    id = "1",
                    correo = "cacho@gmail.com",
                    edad = "20",
                    nombre = "cachito"
                },
                new Cliente
                {
                    id = "2",
                    correo = "trulala@gmail.com",
                    edad = "30",
                    nombre = "trulala"
                }
            };

            return clientes;
        }

        [HttpGet]
        [Route("listarxid")]
        public dynamic listarClientexid(int codigo)
        {
            return new Cliente
            {
                id = codigo.ToString(),
                correo = "cachito@gmail.com",
                edad = "20",
                nombre = "cachito"
            };
        }

        [HttpPost]
        [Route("guardar")]
        public dynamic guardarCliente(Cliente cliente)
        {
            cliente.id = "3";

            return new
            {
                success = true,
                message = "cliente registrado",
                result = cliente
            };
        }

        [HttpPost]
        [Route("eliminar")]
        public dynamic eliminarCliente(Cliente cliente)
        {
            string token = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value;


            if (token != "marco123.")
            {
                return new
                {
                    success = false,
                    message = "token incorrecto",
                    result = ""
                };
            }

            return new
            {
                success = true,
                message = "cliente eliminado",
                result = cliente
            };
        }
    }
}

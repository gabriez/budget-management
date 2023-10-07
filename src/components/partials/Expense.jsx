import { LeadingActions, 
    SwipeableList, 
    SwipeAction, 
    SwipeableListItem, 
    TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css"
import { formatDate, formatBudget } from "../helpers/helper";
import iconoComida from "../../img/icono_comida.svg";
import iconoCasa from "../../img/icono_casa.svg";
import iconoGastos from "../../img/icono_gastos.svg";
import iconoOcio from "../../img/icono_ocio.svg";
import iconoSalud from "../../img/icono_salud.svg";
import iconoSuscripciones from "../../img/icono_suscripciones.svg";
import iconoAhorro from "../../img/icono_ahorro.svg";


const Expense = ({expense, deleteExpense, editExpense}) => {
    const {spentName, quantity, category, id, date} = expense; 

    const icons = {
        ahorro: iconoAhorro,
        comida: iconoComida,
        ocio: iconoOcio,
        casa: iconoCasa,
        gastos: iconoGastos,
        salud: iconoSalud,
        suscripciones: iconoSuscripciones,
    }


    const trailingActions = () => (
        <TrailingActions> 
            <SwipeAction destructive={true} onClick={()=> deleteExpense(id)}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={()=> editExpense(expense)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className="contenido-gasto">
                    <img src={icons[category]} alt="Iconos de categoria" />
                        <div className="descripcion-gasto">
                            <p className="categoria">
                                {category}
                            </p>
                            <p className="nombre-gasto">
                                {spentName}
                            </p>
                            <p className="fecha-gasto">
                                Agregado el: 
                                <span> {formatDate(date)}</span>
                            </p>
                            <p className="cantidad-gasto gasto-mobile"> {formatBudget(quantity)} </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto"> {formatBudget(quantity)} </p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expense

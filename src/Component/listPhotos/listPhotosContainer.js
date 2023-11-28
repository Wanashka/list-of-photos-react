import {connect} from 'react-redux';
import { ListPhotos } from './listPhotos';

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, {})(ListPhotos);